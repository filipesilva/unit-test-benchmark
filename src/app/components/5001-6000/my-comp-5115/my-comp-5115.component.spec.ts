import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5115Component } from './my-comp-5115.component';

describe('MyComp5115Component', () => {
  let component: MyComp5115Component;
  let fixture: ComponentFixture<MyComp5115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
