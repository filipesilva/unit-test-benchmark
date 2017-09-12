import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp659Component } from './my-comp-659.component';

describe('MyComp659Component', () => {
  let component: MyComp659Component;
  let fixture: ComponentFixture<MyComp659Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp659Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
