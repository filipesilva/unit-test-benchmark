import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp508Component } from './my-comp-508.component';

describe('MyComp508Component', () => {
  let component: MyComp508Component;
  let fixture: ComponentFixture<MyComp508Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp508Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
