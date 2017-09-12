import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9146Component } from './my-comp-9146.component';

describe('MyComp9146Component', () => {
  let component: MyComp9146Component;
  let fixture: ComponentFixture<MyComp9146Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9146Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
