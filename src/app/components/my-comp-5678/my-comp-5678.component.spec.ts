import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5678Component } from './my-comp-5678.component';

describe('MyComp5678Component', () => {
  let component: MyComp5678Component;
  let fixture: ComponentFixture<MyComp5678Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5678Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
