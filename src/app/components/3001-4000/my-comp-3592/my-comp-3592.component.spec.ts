import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3592Component } from './my-comp-3592.component';

describe('MyComp3592Component', () => {
  let component: MyComp3592Component;
  let fixture: ComponentFixture<MyComp3592Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3592Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
