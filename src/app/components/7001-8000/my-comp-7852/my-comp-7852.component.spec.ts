import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7852Component } from './my-comp-7852.component';

describe('MyComp7852Component', () => {
  let component: MyComp7852Component;
  let fixture: ComponentFixture<MyComp7852Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7852Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
