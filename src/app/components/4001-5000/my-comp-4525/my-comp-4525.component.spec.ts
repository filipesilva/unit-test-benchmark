import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4525Component } from './my-comp-4525.component';

describe('MyComp4525Component', () => {
  let component: MyComp4525Component;
  let fixture: ComponentFixture<MyComp4525Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4525Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
