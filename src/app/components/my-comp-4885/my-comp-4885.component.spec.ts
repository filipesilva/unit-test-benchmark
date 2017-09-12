import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4885Component } from './my-comp-4885.component';

describe('MyComp4885Component', () => {
  let component: MyComp4885Component;
  let fixture: ComponentFixture<MyComp4885Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4885Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
