import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1764Component } from './my-comp-1764.component';

describe('MyComp1764Component', () => {
  let component: MyComp1764Component;
  let fixture: ComponentFixture<MyComp1764Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1764Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
