import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4324Component } from './my-comp-4324.component';

describe('MyComp4324Component', () => {
  let component: MyComp4324Component;
  let fixture: ComponentFixture<MyComp4324Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4324Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
