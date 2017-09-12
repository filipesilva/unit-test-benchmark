import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp954Component } from './my-comp-954.component';

describe('MyComp954Component', () => {
  let component: MyComp954Component;
  let fixture: ComponentFixture<MyComp954Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp954Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
