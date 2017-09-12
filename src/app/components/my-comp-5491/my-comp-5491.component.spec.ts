import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5491Component } from './my-comp-5491.component';

describe('MyComp5491Component', () => {
  let component: MyComp5491Component;
  let fixture: ComponentFixture<MyComp5491Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5491Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
