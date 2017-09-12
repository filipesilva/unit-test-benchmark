import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9458Component } from './my-comp-9458.component';

describe('MyComp9458Component', () => {
  let component: MyComp9458Component;
  let fixture: ComponentFixture<MyComp9458Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9458Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
