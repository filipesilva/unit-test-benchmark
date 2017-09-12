import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5736Component } from './my-comp-5736.component';

describe('MyComp5736Component', () => {
  let component: MyComp5736Component;
  let fixture: ComponentFixture<MyComp5736Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5736Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
