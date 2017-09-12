import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3667Component } from './my-comp-3667.component';

describe('MyComp3667Component', () => {
  let component: MyComp3667Component;
  let fixture: ComponentFixture<MyComp3667Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3667Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
