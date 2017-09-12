import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4034Component } from './my-comp-4034.component';

describe('MyComp4034Component', () => {
  let component: MyComp4034Component;
  let fixture: ComponentFixture<MyComp4034Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4034Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4034Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
