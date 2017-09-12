import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3012Component } from './my-comp-3012.component';

describe('MyComp3012Component', () => {
  let component: MyComp3012Component;
  let fixture: ComponentFixture<MyComp3012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
