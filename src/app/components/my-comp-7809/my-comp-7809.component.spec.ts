import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7809Component } from './my-comp-7809.component';

describe('MyComp7809Component', () => {
  let component: MyComp7809Component;
  let fixture: ComponentFixture<MyComp7809Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7809Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
