import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7897Component } from './my-comp-7897.component';

describe('MyComp7897Component', () => {
  let component: MyComp7897Component;
  let fixture: ComponentFixture<MyComp7897Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7897Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
