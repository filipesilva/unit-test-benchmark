import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp529Component } from './my-comp-529.component';

describe('MyComp529Component', () => {
  let component: MyComp529Component;
  let fixture: ComponentFixture<MyComp529Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp529Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
