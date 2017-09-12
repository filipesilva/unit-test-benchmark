import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp716Component } from './my-comp-716.component';

describe('MyComp716Component', () => {
  let component: MyComp716Component;
  let fixture: ComponentFixture<MyComp716Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp716Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
