import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3165Component } from './my-comp-3165.component';

describe('MyComp3165Component', () => {
  let component: MyComp3165Component;
  let fixture: ComponentFixture<MyComp3165Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3165Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
