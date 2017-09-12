import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9581Component } from './my-comp-9581.component';

describe('MyComp9581Component', () => {
  let component: MyComp9581Component;
  let fixture: ComponentFixture<MyComp9581Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9581Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
