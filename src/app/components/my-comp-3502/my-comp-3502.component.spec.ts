import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3502Component } from './my-comp-3502.component';

describe('MyComp3502Component', () => {
  let component: MyComp3502Component;
  let fixture: ComponentFixture<MyComp3502Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3502Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
