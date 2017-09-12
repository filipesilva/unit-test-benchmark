import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4058Component } from './my-comp-4058.component';

describe('MyComp4058Component', () => {
  let component: MyComp4058Component;
  let fixture: ComponentFixture<MyComp4058Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4058Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4058Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
