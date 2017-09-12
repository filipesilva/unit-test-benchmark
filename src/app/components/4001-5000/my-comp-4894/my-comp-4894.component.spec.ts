import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4894Component } from './my-comp-4894.component';

describe('MyComp4894Component', () => {
  let component: MyComp4894Component;
  let fixture: ComponentFixture<MyComp4894Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4894Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
