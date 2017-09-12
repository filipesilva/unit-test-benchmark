import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4294Component } from './my-comp-4294.component';

describe('MyComp4294Component', () => {
  let component: MyComp4294Component;
  let fixture: ComponentFixture<MyComp4294Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4294Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
