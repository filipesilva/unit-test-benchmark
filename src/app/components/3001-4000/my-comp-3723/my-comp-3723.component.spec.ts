import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3723Component } from './my-comp-3723.component';

describe('MyComp3723Component', () => {
  let component: MyComp3723Component;
  let fixture: ComponentFixture<MyComp3723Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3723Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
