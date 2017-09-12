import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9670Component } from './my-comp-9670.component';

describe('MyComp9670Component', () => {
  let component: MyComp9670Component;
  let fixture: ComponentFixture<MyComp9670Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9670Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
