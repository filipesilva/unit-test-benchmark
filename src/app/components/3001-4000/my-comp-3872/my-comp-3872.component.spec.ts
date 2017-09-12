import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3872Component } from './my-comp-3872.component';

describe('MyComp3872Component', () => {
  let component: MyComp3872Component;
  let fixture: ComponentFixture<MyComp3872Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3872Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
