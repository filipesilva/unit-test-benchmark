import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7488Component } from './my-comp-7488.component';

describe('MyComp7488Component', () => {
  let component: MyComp7488Component;
  let fixture: ComponentFixture<MyComp7488Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7488Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
