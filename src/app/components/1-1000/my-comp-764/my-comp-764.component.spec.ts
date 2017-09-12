import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp764Component } from './my-comp-764.component';

describe('MyComp764Component', () => {
  let component: MyComp764Component;
  let fixture: ComponentFixture<MyComp764Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp764Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
