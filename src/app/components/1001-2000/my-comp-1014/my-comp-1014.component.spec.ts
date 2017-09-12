import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1014Component } from './my-comp-1014.component';

describe('MyComp1014Component', () => {
  let component: MyComp1014Component;
  let fixture: ComponentFixture<MyComp1014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
