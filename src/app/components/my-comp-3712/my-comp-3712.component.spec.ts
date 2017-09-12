import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3712Component } from './my-comp-3712.component';

describe('MyComp3712Component', () => {
  let component: MyComp3712Component;
  let fixture: ComponentFixture<MyComp3712Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3712Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
