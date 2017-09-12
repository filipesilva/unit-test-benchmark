import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4108Component } from './my-comp-4108.component';

describe('MyComp4108Component', () => {
  let component: MyComp4108Component;
  let fixture: ComponentFixture<MyComp4108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4108Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
