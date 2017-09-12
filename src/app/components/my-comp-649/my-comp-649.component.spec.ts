import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp649Component } from './my-comp-649.component';

describe('MyComp649Component', () => {
  let component: MyComp649Component;
  let fixture: ComponentFixture<MyComp649Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp649Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
