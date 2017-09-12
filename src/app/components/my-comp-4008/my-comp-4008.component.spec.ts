import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4008Component } from './my-comp-4008.component';

describe('MyComp4008Component', () => {
  let component: MyComp4008Component;
  let fixture: ComponentFixture<MyComp4008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
