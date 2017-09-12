import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5994Component } from './my-comp-5994.component';

describe('MyComp5994Component', () => {
  let component: MyComp5994Component;
  let fixture: ComponentFixture<MyComp5994Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5994Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5994Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
