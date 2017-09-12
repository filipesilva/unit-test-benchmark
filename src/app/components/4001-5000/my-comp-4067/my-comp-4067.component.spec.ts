import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4067Component } from './my-comp-4067.component';

describe('MyComp4067Component', () => {
  let component: MyComp4067Component;
  let fixture: ComponentFixture<MyComp4067Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4067Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4067Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
