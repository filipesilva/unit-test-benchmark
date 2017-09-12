import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2924Component } from './my-comp-2924.component';

describe('MyComp2924Component', () => {
  let component: MyComp2924Component;
  let fixture: ComponentFixture<MyComp2924Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2924Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
