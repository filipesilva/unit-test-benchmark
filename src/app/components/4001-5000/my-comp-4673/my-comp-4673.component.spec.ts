import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4673Component } from './my-comp-4673.component';

describe('MyComp4673Component', () => {
  let component: MyComp4673Component;
  let fixture: ComponentFixture<MyComp4673Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4673Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
