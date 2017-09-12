import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7655Component } from './my-comp-7655.component';

describe('MyComp7655Component', () => {
  let component: MyComp7655Component;
  let fixture: ComponentFixture<MyComp7655Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7655Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
