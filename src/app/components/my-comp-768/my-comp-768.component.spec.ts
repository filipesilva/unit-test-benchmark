import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp768Component } from './my-comp-768.component';

describe('MyComp768Component', () => {
  let component: MyComp768Component;
  let fixture: ComponentFixture<MyComp768Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp768Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
