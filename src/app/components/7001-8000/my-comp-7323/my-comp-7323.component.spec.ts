import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7323Component } from './my-comp-7323.component';

describe('MyComp7323Component', () => {
  let component: MyComp7323Component;
  let fixture: ComponentFixture<MyComp7323Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7323Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
