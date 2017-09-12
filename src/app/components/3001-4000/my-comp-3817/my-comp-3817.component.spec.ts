import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3817Component } from './my-comp-3817.component';

describe('MyComp3817Component', () => {
  let component: MyComp3817Component;
  let fixture: ComponentFixture<MyComp3817Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3817Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
