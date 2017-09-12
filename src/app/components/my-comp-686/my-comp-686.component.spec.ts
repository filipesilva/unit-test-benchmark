import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp686Component } from './my-comp-686.component';

describe('MyComp686Component', () => {
  let component: MyComp686Component;
  let fixture: ComponentFixture<MyComp686Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp686Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
