import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7441Component } from './my-comp-7441.component';

describe('MyComp7441Component', () => {
  let component: MyComp7441Component;
  let fixture: ComponentFixture<MyComp7441Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7441Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
