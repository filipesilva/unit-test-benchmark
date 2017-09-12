import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp457Component } from './my-comp-457.component';

describe('MyComp457Component', () => {
  let component: MyComp457Component;
  let fixture: ComponentFixture<MyComp457Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp457Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
