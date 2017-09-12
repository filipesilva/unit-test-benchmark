import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9515Component } from './my-comp-9515.component';

describe('MyComp9515Component', () => {
  let component: MyComp9515Component;
  let fixture: ComponentFixture<MyComp9515Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9515Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
