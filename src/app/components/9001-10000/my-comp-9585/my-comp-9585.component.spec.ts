import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9585Component } from './my-comp-9585.component';

describe('MyComp9585Component', () => {
  let component: MyComp9585Component;
  let fixture: ComponentFixture<MyComp9585Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9585Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
