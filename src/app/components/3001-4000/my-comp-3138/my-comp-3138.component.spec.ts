import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3138Component } from './my-comp-3138.component';

describe('MyComp3138Component', () => {
  let component: MyComp3138Component;
  let fixture: ComponentFixture<MyComp3138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
