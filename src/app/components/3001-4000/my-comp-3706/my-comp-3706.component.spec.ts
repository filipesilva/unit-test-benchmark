import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3706Component } from './my-comp-3706.component';

describe('MyComp3706Component', () => {
  let component: MyComp3706Component;
  let fixture: ComponentFixture<MyComp3706Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3706Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
