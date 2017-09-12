import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7027Component } from './my-comp-7027.component';

describe('MyComp7027Component', () => {
  let component: MyComp7027Component;
  let fixture: ComponentFixture<MyComp7027Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7027Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7027Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
