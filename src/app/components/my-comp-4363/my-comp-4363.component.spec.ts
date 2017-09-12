import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4363Component } from './my-comp-4363.component';

describe('MyComp4363Component', () => {
  let component: MyComp4363Component;
  let fixture: ComponentFixture<MyComp4363Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4363Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
