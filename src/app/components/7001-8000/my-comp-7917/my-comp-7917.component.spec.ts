import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7917Component } from './my-comp-7917.component';

describe('MyComp7917Component', () => {
  let component: MyComp7917Component;
  let fixture: ComponentFixture<MyComp7917Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7917Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
