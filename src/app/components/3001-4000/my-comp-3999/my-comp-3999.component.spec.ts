import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3999Component } from './my-comp-3999.component';

describe('MyComp3999Component', () => {
  let component: MyComp3999Component;
  let fixture: ComponentFixture<MyComp3999Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3999Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
