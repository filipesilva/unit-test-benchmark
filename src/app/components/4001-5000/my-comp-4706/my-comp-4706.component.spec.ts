import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4706Component } from './my-comp-4706.component';

describe('MyComp4706Component', () => {
  let component: MyComp4706Component;
  let fixture: ComponentFixture<MyComp4706Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4706Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
