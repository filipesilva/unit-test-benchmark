import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3032Component } from './my-comp-3032.component';

describe('MyComp3032Component', () => {
  let component: MyComp3032Component;
  let fixture: ComponentFixture<MyComp3032Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3032Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3032Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
