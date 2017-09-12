import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp654Component } from './my-comp-654.component';

describe('MyComp654Component', () => {
  let component: MyComp654Component;
  let fixture: ComponentFixture<MyComp654Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp654Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
