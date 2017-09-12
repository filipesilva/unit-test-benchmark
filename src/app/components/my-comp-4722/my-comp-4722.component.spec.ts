import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4722Component } from './my-comp-4722.component';

describe('MyComp4722Component', () => {
  let component: MyComp4722Component;
  let fixture: ComponentFixture<MyComp4722Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4722Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
