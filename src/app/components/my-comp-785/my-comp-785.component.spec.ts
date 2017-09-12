import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp785Component } from './my-comp-785.component';

describe('MyComp785Component', () => {
  let component: MyComp785Component;
  let fixture: ComponentFixture<MyComp785Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp785Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
