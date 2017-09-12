import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4056Component } from './my-comp-4056.component';

describe('MyComp4056Component', () => {
  let component: MyComp4056Component;
  let fixture: ComponentFixture<MyComp4056Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4056Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4056Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
