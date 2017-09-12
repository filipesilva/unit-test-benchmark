import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3201Component } from './my-comp-3201.component';

describe('MyComp3201Component', () => {
  let component: MyComp3201Component;
  let fixture: ComponentFixture<MyComp3201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
