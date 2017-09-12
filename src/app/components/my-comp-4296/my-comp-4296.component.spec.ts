import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4296Component } from './my-comp-4296.component';

describe('MyComp4296Component', () => {
  let component: MyComp4296Component;
  let fixture: ComponentFixture<MyComp4296Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4296Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
