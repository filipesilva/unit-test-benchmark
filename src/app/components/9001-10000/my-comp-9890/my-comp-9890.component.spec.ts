import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9890Component } from './my-comp-9890.component';

describe('MyComp9890Component', () => {
  let component: MyComp9890Component;
  let fixture: ComponentFixture<MyComp9890Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9890Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
