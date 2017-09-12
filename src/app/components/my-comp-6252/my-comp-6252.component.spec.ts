import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6252Component } from './my-comp-6252.component';

describe('MyComp6252Component', () => {
  let component: MyComp6252Component;
  let fixture: ComponentFixture<MyComp6252Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6252Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
