import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4453Component } from './my-comp-4453.component';

describe('MyComp4453Component', () => {
  let component: MyComp4453Component;
  let fixture: ComponentFixture<MyComp4453Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4453Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
