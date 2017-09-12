import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4874Component } from './my-comp-4874.component';

describe('MyComp4874Component', () => {
  let component: MyComp4874Component;
  let fixture: ComponentFixture<MyComp4874Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4874Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
