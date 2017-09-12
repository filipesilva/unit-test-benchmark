import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9857Component } from './my-comp-9857.component';

describe('MyComp9857Component', () => {
  let component: MyComp9857Component;
  let fixture: ComponentFixture<MyComp9857Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9857Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
