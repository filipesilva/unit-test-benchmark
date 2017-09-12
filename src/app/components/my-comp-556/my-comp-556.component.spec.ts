import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp556Component } from './my-comp-556.component';

describe('MyComp556Component', () => {
  let component: MyComp556Component;
  let fixture: ComponentFixture<MyComp556Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp556Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
