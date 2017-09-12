import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3890Component } from './my-comp-3890.component';

describe('MyComp3890Component', () => {
  let component: MyComp3890Component;
  let fixture: ComponentFixture<MyComp3890Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3890Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
