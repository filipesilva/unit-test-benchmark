import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp104Component } from './my-comp-104.component';

describe('MyComp104Component', () => {
  let component: MyComp104Component;
  let fixture: ComponentFixture<MyComp104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
