import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5781Component } from './my-comp-5781.component';

describe('MyComp5781Component', () => {
  let component: MyComp5781Component;
  let fixture: ComponentFixture<MyComp5781Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5781Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
