import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp231Component } from './my-comp-231.component';

describe('MyComp231Component', () => {
  let component: MyComp231Component;
  let fixture: ComponentFixture<MyComp231Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp231Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
