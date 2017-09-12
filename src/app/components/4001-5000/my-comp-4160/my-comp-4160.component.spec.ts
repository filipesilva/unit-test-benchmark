import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4160Component } from './my-comp-4160.component';

describe('MyComp4160Component', () => {
  let component: MyComp4160Component;
  let fixture: ComponentFixture<MyComp4160Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4160Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
