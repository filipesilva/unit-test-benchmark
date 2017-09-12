import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp689Component } from './my-comp-689.component';

describe('MyComp689Component', () => {
  let component: MyComp689Component;
  let fixture: ComponentFixture<MyComp689Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp689Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
