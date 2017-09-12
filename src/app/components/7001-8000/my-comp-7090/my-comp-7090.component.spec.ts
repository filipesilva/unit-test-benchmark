import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7090Component } from './my-comp-7090.component';

describe('MyComp7090Component', () => {
  let component: MyComp7090Component;
  let fixture: ComponentFixture<MyComp7090Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7090Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7090Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
