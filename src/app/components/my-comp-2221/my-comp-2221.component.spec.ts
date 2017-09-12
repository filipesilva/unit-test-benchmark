import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2221Component } from './my-comp-2221.component';

describe('MyComp2221Component', () => {
  let component: MyComp2221Component;
  let fixture: ComponentFixture<MyComp2221Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2221Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
