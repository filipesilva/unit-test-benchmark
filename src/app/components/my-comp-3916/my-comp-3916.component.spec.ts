import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3916Component } from './my-comp-3916.component';

describe('MyComp3916Component', () => {
  let component: MyComp3916Component;
  let fixture: ComponentFixture<MyComp3916Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3916Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
