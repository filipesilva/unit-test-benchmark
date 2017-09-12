import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4136Component } from './my-comp-4136.component';

describe('MyComp4136Component', () => {
  let component: MyComp4136Component;
  let fixture: ComponentFixture<MyComp4136Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4136Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
