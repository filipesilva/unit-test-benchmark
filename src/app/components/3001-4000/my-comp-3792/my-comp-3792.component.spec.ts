import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3792Component } from './my-comp-3792.component';

describe('MyComp3792Component', () => {
  let component: MyComp3792Component;
  let fixture: ComponentFixture<MyComp3792Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3792Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
