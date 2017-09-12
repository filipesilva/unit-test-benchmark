import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7973Component } from './my-comp-7973.component';

describe('MyComp7973Component', () => {
  let component: MyComp7973Component;
  let fixture: ComponentFixture<MyComp7973Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7973Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7973Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
