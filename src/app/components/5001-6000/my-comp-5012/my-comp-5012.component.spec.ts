import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5012Component } from './my-comp-5012.component';

describe('MyComp5012Component', () => {
  let component: MyComp5012Component;
  let fixture: ComponentFixture<MyComp5012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
