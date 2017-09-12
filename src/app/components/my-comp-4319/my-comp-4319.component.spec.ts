import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4319Component } from './my-comp-4319.component';

describe('MyComp4319Component', () => {
  let component: MyComp4319Component;
  let fixture: ComponentFixture<MyComp4319Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4319Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
