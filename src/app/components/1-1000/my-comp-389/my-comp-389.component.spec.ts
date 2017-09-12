import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp389Component } from './my-comp-389.component';

describe('MyComp389Component', () => {
  let component: MyComp389Component;
  let fixture: ComponentFixture<MyComp389Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp389Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
