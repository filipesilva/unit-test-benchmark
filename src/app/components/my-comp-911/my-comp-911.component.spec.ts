import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp911Component } from './my-comp-911.component';

describe('MyComp911Component', () => {
  let component: MyComp911Component;
  let fixture: ComponentFixture<MyComp911Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp911Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
