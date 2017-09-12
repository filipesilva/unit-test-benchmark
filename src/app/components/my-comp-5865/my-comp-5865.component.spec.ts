import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5865Component } from './my-comp-5865.component';

describe('MyComp5865Component', () => {
  let component: MyComp5865Component;
  let fixture: ComponentFixture<MyComp5865Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5865Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
