import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2613Component } from './my-comp-2613.component';

describe('MyComp2613Component', () => {
  let component: MyComp2613Component;
  let fixture: ComponentFixture<MyComp2613Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2613Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
