import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4450Component } from './my-comp-4450.component';

describe('MyComp4450Component', () => {
  let component: MyComp4450Component;
  let fixture: ComponentFixture<MyComp4450Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4450Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
