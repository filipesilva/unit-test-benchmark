import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6722Component } from './my-comp-6722.component';

describe('MyComp6722Component', () => {
  let component: MyComp6722Component;
  let fixture: ComponentFixture<MyComp6722Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6722Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
