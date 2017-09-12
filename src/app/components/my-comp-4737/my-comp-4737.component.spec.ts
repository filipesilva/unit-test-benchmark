import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4737Component } from './my-comp-4737.component';

describe('MyComp4737Component', () => {
  let component: MyComp4737Component;
  let fixture: ComponentFixture<MyComp4737Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4737Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
