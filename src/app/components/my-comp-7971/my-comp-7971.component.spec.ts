import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7971Component } from './my-comp-7971.component';

describe('MyComp7971Component', () => {
  let component: MyComp7971Component;
  let fixture: ComponentFixture<MyComp7971Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7971Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7971Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
