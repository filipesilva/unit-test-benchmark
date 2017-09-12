import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9261Component } from './my-comp-9261.component';

describe('MyComp9261Component', () => {
  let component: MyComp9261Component;
  let fixture: ComponentFixture<MyComp9261Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9261Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
