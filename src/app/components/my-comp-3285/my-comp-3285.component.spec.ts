import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3285Component } from './my-comp-3285.component';

describe('MyComp3285Component', () => {
  let component: MyComp3285Component;
  let fixture: ComponentFixture<MyComp3285Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3285Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
