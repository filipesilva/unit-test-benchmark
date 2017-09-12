import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4137Component } from './my-comp-4137.component';

describe('MyComp4137Component', () => {
  let component: MyComp4137Component;
  let fixture: ComponentFixture<MyComp4137Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4137Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
