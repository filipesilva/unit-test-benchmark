import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9252Component } from './my-comp-9252.component';

describe('MyComp9252Component', () => {
  let component: MyComp9252Component;
  let fixture: ComponentFixture<MyComp9252Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9252Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
