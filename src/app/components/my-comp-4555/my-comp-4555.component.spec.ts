import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4555Component } from './my-comp-4555.component';

describe('MyComp4555Component', () => {
  let component: MyComp4555Component;
  let fixture: ComponentFixture<MyComp4555Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4555Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
