import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4002Component } from './my-comp-4002.component';

describe('MyComp4002Component', () => {
  let component: MyComp4002Component;
  let fixture: ComponentFixture<MyComp4002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
