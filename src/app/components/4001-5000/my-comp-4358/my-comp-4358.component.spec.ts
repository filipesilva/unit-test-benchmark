import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4358Component } from './my-comp-4358.component';

describe('MyComp4358Component', () => {
  let component: MyComp4358Component;
  let fixture: ComponentFixture<MyComp4358Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4358Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
