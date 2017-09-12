import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4244Component } from './my-comp-4244.component';

describe('MyComp4244Component', () => {
  let component: MyComp4244Component;
  let fixture: ComponentFixture<MyComp4244Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4244Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
