import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4904Component } from './my-comp-4904.component';

describe('MyComp4904Component', () => {
  let component: MyComp4904Component;
  let fixture: ComponentFixture<MyComp4904Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4904Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
