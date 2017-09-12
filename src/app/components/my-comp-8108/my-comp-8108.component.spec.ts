import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8108Component } from './my-comp-8108.component';

describe('MyComp8108Component', () => {
  let component: MyComp8108Component;
  let fixture: ComponentFixture<MyComp8108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8108Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
