import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4758Component } from './my-comp-4758.component';

describe('MyComp4758Component', () => {
  let component: MyComp4758Component;
  let fixture: ComponentFixture<MyComp4758Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4758Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
