import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp292Component } from './my-comp-292.component';

describe('MyComp292Component', () => {
  let component: MyComp292Component;
  let fixture: ComponentFixture<MyComp292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp292Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
