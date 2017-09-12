import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5312Component } from './my-comp-5312.component';

describe('MyComp5312Component', () => {
  let component: MyComp5312Component;
  let fixture: ComponentFixture<MyComp5312Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5312Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
