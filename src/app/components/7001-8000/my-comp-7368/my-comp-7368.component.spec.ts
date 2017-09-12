import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7368Component } from './my-comp-7368.component';

describe('MyComp7368Component', () => {
  let component: MyComp7368Component;
  let fixture: ComponentFixture<MyComp7368Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7368Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
