import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp427Component } from './my-comp-427.component';

describe('MyComp427Component', () => {
  let component: MyComp427Component;
  let fixture: ComponentFixture<MyComp427Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp427Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
