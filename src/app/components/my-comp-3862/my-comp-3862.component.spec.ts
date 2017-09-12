import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3862Component } from './my-comp-3862.component';

describe('MyComp3862Component', () => {
  let component: MyComp3862Component;
  let fixture: ComponentFixture<MyComp3862Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3862Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
