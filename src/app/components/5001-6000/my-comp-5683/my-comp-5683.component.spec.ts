import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5683Component } from './my-comp-5683.component';

describe('MyComp5683Component', () => {
  let component: MyComp5683Component;
  let fixture: ComponentFixture<MyComp5683Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5683Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
