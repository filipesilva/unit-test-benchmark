import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5455Component } from './my-comp-5455.component';

describe('MyComp5455Component', () => {
  let component: MyComp5455Component;
  let fixture: ComponentFixture<MyComp5455Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5455Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
