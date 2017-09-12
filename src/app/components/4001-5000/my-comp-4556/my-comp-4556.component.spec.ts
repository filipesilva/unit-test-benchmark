import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4556Component } from './my-comp-4556.component';

describe('MyComp4556Component', () => {
  let component: MyComp4556Component;
  let fixture: ComponentFixture<MyComp4556Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4556Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
