import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7012Component } from './my-comp-7012.component';

describe('MyComp7012Component', () => {
  let component: MyComp7012Component;
  let fixture: ComponentFixture<MyComp7012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
