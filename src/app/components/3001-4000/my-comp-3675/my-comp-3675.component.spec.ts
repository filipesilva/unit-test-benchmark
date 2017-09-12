import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3675Component } from './my-comp-3675.component';

describe('MyComp3675Component', () => {
  let component: MyComp3675Component;
  let fixture: ComponentFixture<MyComp3675Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3675Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
