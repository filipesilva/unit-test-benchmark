import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5189Component } from './my-comp-5189.component';

describe('MyComp5189Component', () => {
  let component: MyComp5189Component;
  let fixture: ComponentFixture<MyComp5189Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5189Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
