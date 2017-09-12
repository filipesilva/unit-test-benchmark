import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp875Component } from './my-comp-875.component';

describe('MyComp875Component', () => {
  let component: MyComp875Component;
  let fixture: ComponentFixture<MyComp875Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp875Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
