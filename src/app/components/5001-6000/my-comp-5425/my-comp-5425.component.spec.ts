import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5425Component } from './my-comp-5425.component';

describe('MyComp5425Component', () => {
  let component: MyComp5425Component;
  let fixture: ComponentFixture<MyComp5425Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5425Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
