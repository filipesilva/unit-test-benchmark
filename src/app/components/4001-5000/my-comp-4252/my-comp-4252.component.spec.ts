import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4252Component } from './my-comp-4252.component';

describe('MyComp4252Component', () => {
  let component: MyComp4252Component;
  let fixture: ComponentFixture<MyComp4252Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4252Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
