import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5412Component } from './my-comp-5412.component';

describe('MyComp5412Component', () => {
  let component: MyComp5412Component;
  let fixture: ComponentFixture<MyComp5412Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5412Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
