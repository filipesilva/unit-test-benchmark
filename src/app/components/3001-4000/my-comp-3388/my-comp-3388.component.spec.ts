import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3388Component } from './my-comp-3388.component';

describe('MyComp3388Component', () => {
  let component: MyComp3388Component;
  let fixture: ComponentFixture<MyComp3388Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3388Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
