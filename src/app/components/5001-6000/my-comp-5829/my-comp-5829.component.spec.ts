import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5829Component } from './my-comp-5829.component';

describe('MyComp5829Component', () => {
  let component: MyComp5829Component;
  let fixture: ComponentFixture<MyComp5829Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5829Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
