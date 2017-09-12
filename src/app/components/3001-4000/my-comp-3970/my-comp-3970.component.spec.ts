import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3970Component } from './my-comp-3970.component';

describe('MyComp3970Component', () => {
  let component: MyComp3970Component;
  let fixture: ComponentFixture<MyComp3970Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3970Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
