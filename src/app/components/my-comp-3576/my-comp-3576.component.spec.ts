import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3576Component } from './my-comp-3576.component';

describe('MyComp3576Component', () => {
  let component: MyComp3576Component;
  let fixture: ComponentFixture<MyComp3576Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3576Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
