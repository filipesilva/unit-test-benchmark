import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7108Component } from './my-comp-7108.component';

describe('MyComp7108Component', () => {
  let component: MyComp7108Component;
  let fixture: ComponentFixture<MyComp7108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7108Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
