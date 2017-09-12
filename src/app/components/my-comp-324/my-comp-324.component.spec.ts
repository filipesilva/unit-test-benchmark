import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp324Component } from './my-comp-324.component';

describe('MyComp324Component', () => {
  let component: MyComp324Component;
  let fixture: ComponentFixture<MyComp324Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp324Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
