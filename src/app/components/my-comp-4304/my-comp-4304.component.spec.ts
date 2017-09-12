import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4304Component } from './my-comp-4304.component';

describe('MyComp4304Component', () => {
  let component: MyComp4304Component;
  let fixture: ComponentFixture<MyComp4304Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4304Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
