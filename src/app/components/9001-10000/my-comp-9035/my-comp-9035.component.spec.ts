import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9035Component } from './my-comp-9035.component';

describe('MyComp9035Component', () => {
  let component: MyComp9035Component;
  let fixture: ComponentFixture<MyComp9035Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9035Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9035Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
