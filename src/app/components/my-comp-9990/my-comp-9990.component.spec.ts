import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9990Component } from './my-comp-9990.component';

describe('MyComp9990Component', () => {
  let component: MyComp9990Component;
  let fixture: ComponentFixture<MyComp9990Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9990Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9990Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
