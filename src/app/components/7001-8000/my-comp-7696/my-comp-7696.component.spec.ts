import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7696Component } from './my-comp-7696.component';

describe('MyComp7696Component', () => {
  let component: MyComp7696Component;
  let fixture: ComponentFixture<MyComp7696Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7696Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
