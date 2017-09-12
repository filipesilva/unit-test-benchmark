import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp290Component } from './my-comp-290.component';

describe('MyComp290Component', () => {
  let component: MyComp290Component;
  let fixture: ComponentFixture<MyComp290Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp290Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
