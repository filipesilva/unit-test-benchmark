import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3249Component } from './my-comp-3249.component';

describe('MyComp3249Component', () => {
  let component: MyComp3249Component;
  let fixture: ComponentFixture<MyComp3249Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3249Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
