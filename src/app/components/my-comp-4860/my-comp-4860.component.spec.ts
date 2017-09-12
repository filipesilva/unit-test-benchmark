import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4860Component } from './my-comp-4860.component';

describe('MyComp4860Component', () => {
  let component: MyComp4860Component;
  let fixture: ComponentFixture<MyComp4860Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4860Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
