import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4515Component } from './my-comp-4515.component';

describe('MyComp4515Component', () => {
  let component: MyComp4515Component;
  let fixture: ComponentFixture<MyComp4515Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4515Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
