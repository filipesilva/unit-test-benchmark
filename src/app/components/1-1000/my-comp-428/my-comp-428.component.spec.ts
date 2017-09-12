import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp428Component } from './my-comp-428.component';

describe('MyComp428Component', () => {
  let component: MyComp428Component;
  let fixture: ComponentFixture<MyComp428Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp428Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
