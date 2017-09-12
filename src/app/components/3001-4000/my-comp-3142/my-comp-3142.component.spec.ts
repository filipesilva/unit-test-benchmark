import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3142Component } from './my-comp-3142.component';

describe('MyComp3142Component', () => {
  let component: MyComp3142Component;
  let fixture: ComponentFixture<MyComp3142Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3142Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
