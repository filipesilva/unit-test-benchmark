import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7358Component } from './my-comp-7358.component';

describe('MyComp7358Component', () => {
  let component: MyComp7358Component;
  let fixture: ComponentFixture<MyComp7358Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7358Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
