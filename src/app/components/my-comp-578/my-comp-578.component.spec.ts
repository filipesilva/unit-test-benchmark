import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp578Component } from './my-comp-578.component';

describe('MyComp578Component', () => {
  let component: MyComp578Component;
  let fixture: ComponentFixture<MyComp578Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp578Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
