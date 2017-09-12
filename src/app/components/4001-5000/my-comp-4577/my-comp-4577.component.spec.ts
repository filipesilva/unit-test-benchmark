import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4577Component } from './my-comp-4577.component';

describe('MyComp4577Component', () => {
  let component: MyComp4577Component;
  let fixture: ComponentFixture<MyComp4577Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4577Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
