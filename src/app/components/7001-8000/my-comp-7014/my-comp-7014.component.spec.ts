import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7014Component } from './my-comp-7014.component';

describe('MyComp7014Component', () => {
  let component: MyComp7014Component;
  let fixture: ComponentFixture<MyComp7014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
