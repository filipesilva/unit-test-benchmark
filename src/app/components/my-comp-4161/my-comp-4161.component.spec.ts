import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4161Component } from './my-comp-4161.component';

describe('MyComp4161Component', () => {
  let component: MyComp4161Component;
  let fixture: ComponentFixture<MyComp4161Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4161Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
