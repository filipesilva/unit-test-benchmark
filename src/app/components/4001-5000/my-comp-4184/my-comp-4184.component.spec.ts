import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4184Component } from './my-comp-4184.component';

describe('MyComp4184Component', () => {
  let component: MyComp4184Component;
  let fixture: ComponentFixture<MyComp4184Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4184Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
