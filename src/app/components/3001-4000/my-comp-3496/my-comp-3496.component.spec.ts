import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3496Component } from './my-comp-3496.component';

describe('MyComp3496Component', () => {
  let component: MyComp3496Component;
  let fixture: ComponentFixture<MyComp3496Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3496Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
