import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp207Component } from './my-comp-207.component';

describe('MyComp207Component', () => {
  let component: MyComp207Component;
  let fixture: ComponentFixture<MyComp207Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp207Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
