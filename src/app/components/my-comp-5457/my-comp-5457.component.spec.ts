import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5457Component } from './my-comp-5457.component';

describe('MyComp5457Component', () => {
  let component: MyComp5457Component;
  let fixture: ComponentFixture<MyComp5457Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5457Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
