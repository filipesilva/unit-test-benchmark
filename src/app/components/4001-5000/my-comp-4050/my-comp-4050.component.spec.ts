import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4050Component } from './my-comp-4050.component';

describe('MyComp4050Component', () => {
  let component: MyComp4050Component;
  let fixture: ComponentFixture<MyComp4050Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4050Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
