import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3008Component } from './my-comp-3008.component';

describe('MyComp3008Component', () => {
  let component: MyComp3008Component;
  let fixture: ComponentFixture<MyComp3008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
