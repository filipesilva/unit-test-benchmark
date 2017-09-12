import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5497Component } from './my-comp-5497.component';

describe('MyComp5497Component', () => {
  let component: MyComp5497Component;
  let fixture: ComponentFixture<MyComp5497Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5497Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
