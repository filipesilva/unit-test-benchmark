import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3845Component } from './my-comp-3845.component';

describe('MyComp3845Component', () => {
  let component: MyComp3845Component;
  let fixture: ComponentFixture<MyComp3845Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3845Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
