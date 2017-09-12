import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3616Component } from './my-comp-3616.component';

describe('MyComp3616Component', () => {
  let component: MyComp3616Component;
  let fixture: ComponentFixture<MyComp3616Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3616Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
