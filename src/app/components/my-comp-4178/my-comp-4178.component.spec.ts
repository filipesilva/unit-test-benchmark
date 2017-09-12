import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4178Component } from './my-comp-4178.component';

describe('MyComp4178Component', () => {
  let component: MyComp4178Component;
  let fixture: ComponentFixture<MyComp4178Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4178Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
