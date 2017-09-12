import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6686Component } from './my-comp-6686.component';

describe('MyComp6686Component', () => {
  let component: MyComp6686Component;
  let fixture: ComponentFixture<MyComp6686Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6686Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
