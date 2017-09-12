import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3922Component } from './my-comp-3922.component';

describe('MyComp3922Component', () => {
  let component: MyComp3922Component;
  let fixture: ComponentFixture<MyComp3922Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3922Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
