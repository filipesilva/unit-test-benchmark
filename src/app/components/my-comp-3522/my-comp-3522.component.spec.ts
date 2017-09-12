import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3522Component } from './my-comp-3522.component';

describe('MyComp3522Component', () => {
  let component: MyComp3522Component;
  let fixture: ComponentFixture<MyComp3522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
