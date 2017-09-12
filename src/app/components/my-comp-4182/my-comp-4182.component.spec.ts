import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4182Component } from './my-comp-4182.component';

describe('MyComp4182Component', () => {
  let component: MyComp4182Component;
  let fixture: ComponentFixture<MyComp4182Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4182Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
