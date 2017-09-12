import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9333Component } from './my-comp-9333.component';

describe('MyComp9333Component', () => {
  let component: MyComp9333Component;
  let fixture: ComponentFixture<MyComp9333Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9333Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
