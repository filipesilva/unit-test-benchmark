import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4814Component } from './my-comp-4814.component';

describe('MyComp4814Component', () => {
  let component: MyComp4814Component;
  let fixture: ComponentFixture<MyComp4814Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4814Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
