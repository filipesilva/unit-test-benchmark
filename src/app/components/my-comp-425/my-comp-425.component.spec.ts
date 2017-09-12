import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp425Component } from './my-comp-425.component';

describe('MyComp425Component', () => {
  let component: MyComp425Component;
  let fixture: ComponentFixture<MyComp425Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp425Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
