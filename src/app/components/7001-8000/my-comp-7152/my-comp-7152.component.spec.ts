import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7152Component } from './my-comp-7152.component';

describe('MyComp7152Component', () => {
  let component: MyComp7152Component;
  let fixture: ComponentFixture<MyComp7152Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7152Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
