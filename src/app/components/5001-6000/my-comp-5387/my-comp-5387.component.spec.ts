import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5387Component } from './my-comp-5387.component';

describe('MyComp5387Component', () => {
  let component: MyComp5387Component;
  let fixture: ComponentFixture<MyComp5387Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5387Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
