import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3262Component } from './my-comp-3262.component';

describe('MyComp3262Component', () => {
  let component: MyComp3262Component;
  let fixture: ComponentFixture<MyComp3262Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3262Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
