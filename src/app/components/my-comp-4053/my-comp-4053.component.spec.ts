import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4053Component } from './my-comp-4053.component';

describe('MyComp4053Component', () => {
  let component: MyComp4053Component;
  let fixture: ComponentFixture<MyComp4053Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4053Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4053Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
