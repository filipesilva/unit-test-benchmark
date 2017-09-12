import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4622Component } from './my-comp-4622.component';

describe('MyComp4622Component', () => {
  let component: MyComp4622Component;
  let fixture: ComponentFixture<MyComp4622Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4622Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
