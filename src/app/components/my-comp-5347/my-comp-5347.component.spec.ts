import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5347Component } from './my-comp-5347.component';

describe('MyComp5347Component', () => {
  let component: MyComp5347Component;
  let fixture: ComponentFixture<MyComp5347Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5347Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
