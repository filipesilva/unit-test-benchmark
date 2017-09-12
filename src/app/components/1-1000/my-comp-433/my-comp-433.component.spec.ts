import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp433Component } from './my-comp-433.component';

describe('MyComp433Component', () => {
  let component: MyComp433Component;
  let fixture: ComponentFixture<MyComp433Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp433Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
