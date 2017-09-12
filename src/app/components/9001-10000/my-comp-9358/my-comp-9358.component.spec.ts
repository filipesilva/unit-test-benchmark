import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9358Component } from './my-comp-9358.component';

describe('MyComp9358Component', () => {
  let component: MyComp9358Component;
  let fixture: ComponentFixture<MyComp9358Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9358Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
