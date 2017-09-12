import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3183Component } from './my-comp-3183.component';

describe('MyComp3183Component', () => {
  let component: MyComp3183Component;
  let fixture: ComponentFixture<MyComp3183Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3183Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
