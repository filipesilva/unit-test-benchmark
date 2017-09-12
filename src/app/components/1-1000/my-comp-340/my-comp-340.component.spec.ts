import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp340Component } from './my-comp-340.component';

describe('MyComp340Component', () => {
  let component: MyComp340Component;
  let fixture: ComponentFixture<MyComp340Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp340Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
