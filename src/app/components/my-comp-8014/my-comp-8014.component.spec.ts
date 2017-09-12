import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8014Component } from './my-comp-8014.component';

describe('MyComp8014Component', () => {
  let component: MyComp8014Component;
  let fixture: ComponentFixture<MyComp8014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
