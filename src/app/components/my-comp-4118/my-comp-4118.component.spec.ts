import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4118Component } from './my-comp-4118.component';

describe('MyComp4118Component', () => {
  let component: MyComp4118Component;
  let fixture: ComponentFixture<MyComp4118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4118Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
