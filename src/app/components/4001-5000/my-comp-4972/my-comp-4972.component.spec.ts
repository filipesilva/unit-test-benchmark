import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4972Component } from './my-comp-4972.component';

describe('MyComp4972Component', () => {
  let component: MyComp4972Component;
  let fixture: ComponentFixture<MyComp4972Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4972Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
