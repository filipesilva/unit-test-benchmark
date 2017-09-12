import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5234Component } from './my-comp-5234.component';

describe('MyComp5234Component', () => {
  let component: MyComp5234Component;
  let fixture: ComponentFixture<MyComp5234Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5234Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
