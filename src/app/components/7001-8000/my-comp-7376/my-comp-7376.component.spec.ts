import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7376Component } from './my-comp-7376.component';

describe('MyComp7376Component', () => {
  let component: MyComp7376Component;
  let fixture: ComponentFixture<MyComp7376Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7376Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
