import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3525Component } from './my-comp-3525.component';

describe('MyComp3525Component', () => {
  let component: MyComp3525Component;
  let fixture: ComponentFixture<MyComp3525Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3525Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
