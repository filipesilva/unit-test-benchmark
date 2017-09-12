import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9108Component } from './my-comp-9108.component';

describe('MyComp9108Component', () => {
  let component: MyComp9108Component;
  let fixture: ComponentFixture<MyComp9108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9108Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
