import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4674Component } from './my-comp-4674.component';

describe('MyComp4674Component', () => {
  let component: MyComp4674Component;
  let fixture: ComponentFixture<MyComp4674Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4674Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
