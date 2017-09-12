import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4463Component } from './my-comp-4463.component';

describe('MyComp4463Component', () => {
  let component: MyComp4463Component;
  let fixture: ComponentFixture<MyComp4463Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4463Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
