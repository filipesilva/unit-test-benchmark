import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4709Component } from './my-comp-4709.component';

describe('MyComp4709Component', () => {
  let component: MyComp4709Component;
  let fixture: ComponentFixture<MyComp4709Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4709Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
