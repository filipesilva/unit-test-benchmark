import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5797Component } from './my-comp-5797.component';

describe('MyComp5797Component', () => {
  let component: MyComp5797Component;
  let fixture: ComponentFixture<MyComp5797Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5797Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
