import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4843Component } from './my-comp-4843.component';

describe('MyComp4843Component', () => {
  let component: MyComp4843Component;
  let fixture: ComponentFixture<MyComp4843Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4843Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
