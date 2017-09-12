import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4035Component } from './my-comp-4035.component';

describe('MyComp4035Component', () => {
  let component: MyComp4035Component;
  let fixture: ComponentFixture<MyComp4035Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4035Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4035Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
