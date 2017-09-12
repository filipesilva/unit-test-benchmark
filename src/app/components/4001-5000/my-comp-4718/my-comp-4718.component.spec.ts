import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4718Component } from './my-comp-4718.component';

describe('MyComp4718Component', () => {
  let component: MyComp4718Component;
  let fixture: ComponentFixture<MyComp4718Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4718Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
