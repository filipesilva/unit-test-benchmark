import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp369Component } from './my-comp-369.component';

describe('MyComp369Component', () => {
  let component: MyComp369Component;
  let fixture: ComponentFixture<MyComp369Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp369Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
