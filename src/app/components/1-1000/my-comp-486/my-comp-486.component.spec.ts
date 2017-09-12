import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp486Component } from './my-comp-486.component';

describe('MyComp486Component', () => {
  let component: MyComp486Component;
  let fixture: ComponentFixture<MyComp486Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp486Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
