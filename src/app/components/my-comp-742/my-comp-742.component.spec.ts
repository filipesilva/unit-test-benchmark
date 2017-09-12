import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp742Component } from './my-comp-742.component';

describe('MyComp742Component', () => {
  let component: MyComp742Component;
  let fixture: ComponentFixture<MyComp742Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp742Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
