import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp874Component } from './my-comp-874.component';

describe('MyComp874Component', () => {
  let component: MyComp874Component;
  let fixture: ComponentFixture<MyComp874Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp874Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
