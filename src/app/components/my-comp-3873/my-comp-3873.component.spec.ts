import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3873Component } from './my-comp-3873.component';

describe('MyComp3873Component', () => {
  let component: MyComp3873Component;
  let fixture: ComponentFixture<MyComp3873Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3873Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
