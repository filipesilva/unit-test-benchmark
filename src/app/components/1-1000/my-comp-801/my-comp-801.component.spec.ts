import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp801Component } from './my-comp-801.component';

describe('MyComp801Component', () => {
  let component: MyComp801Component;
  let fixture: ComponentFixture<MyComp801Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp801Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
