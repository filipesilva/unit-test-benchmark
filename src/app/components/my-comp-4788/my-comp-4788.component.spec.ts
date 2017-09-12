import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4788Component } from './my-comp-4788.component';

describe('MyComp4788Component', () => {
  let component: MyComp4788Component;
  let fixture: ComponentFixture<MyComp4788Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4788Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
