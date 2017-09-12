import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4090Component } from './my-comp-4090.component';

describe('MyComp4090Component', () => {
  let component: MyComp4090Component;
  let fixture: ComponentFixture<MyComp4090Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4090Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4090Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
